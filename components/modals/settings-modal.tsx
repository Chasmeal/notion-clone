'use client';

import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { ModeToggle } from '@/components/mode-toggle';

import { useSettings } from '@/hooks/use-settings';

export const SettingsModal = () => {
	const settings = useSettings();

	return (
		<Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
			<DialogContent>
				<DialogHeader className='pb-3 border-b'>
					<h2 className='font-medium text-lg'>My Settings</h2>
				</DialogHeader>
				<div className='flex items-center justify-between'>
					<div className='flex flex-col gap-y-1'>
						<Label>Appearance</Label>
						<span className='text-[0.8rem] text-muted-foreground'>
							Customize how Jotion looks on your device
						</span>
					</div>
					<ModeToggle />
				</div>
			</DialogContent>
		</Dialog>
	);
};
